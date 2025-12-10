import { NextResponse } from "next/server";
import { getCourseBySlug } from "@/lib/mock-db";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { userDetails, answers, courseSlug } = body;

        const course = await getCourseBySlug(courseSlug);

        if (!course) {
            return NextResponse.json({ error: "Course not found" }, { status: 404 });
        }

        // Calculate Score
        let score = 0;
        course.questions.forEach((q) => {
            if (answers[q.id] === q.correctAnswer) {
                score++;
            }
        });

        const totalQuestions = course.questions.length;
        const percentage = Math.round((score / totalQuestions) * 100);

        // Send Email
        // Using environment variables for transporter if available, else mocking for dev if no env vars
        // Assuming standard NODEMAILER setup as per package.json deps

        // Note: In a real app, strict error handling for missing env vars is needed.
        // Here we wrap in try/catch to not fail the UI if email fails (unless critical).

        try {
            const transporter = nodemailer.createTransport({
                service: "gmail", // Or use host/port from env
                auth: {
                    user: process.env.EMAIL_USER, // Ensure these exist in .env
                    pass: process.env.EMAIL_PASS,
                },
            });

            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: userDetails.email,
                subject: `Your Mock Test Results - ${course.name}`,
                html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #333;">Mock Test Results</h2>
                    <p>Dear ${userDetails.name},</p>
                    <p>You have successfully completed the mock test for <strong>${course.name}</strong>.</p>
                    
                    <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <h3 style="margin-top: 0;">Score Summary</h3>
                        <p><strong>Score:</strong> ${score} / ${totalQuestions}</p>
                        <p><strong>Percentage:</strong> ${percentage}%</p>
                        <p><strong>Status:</strong> ${percentage >= 60 ? '<span style="color: green;">Passed</span>' : '<span style="color: red;">Needs Improvement</span>'}</p>
                    </div>

                    <p>Thank you for testing your skills with us!</p>
                    <p>Best regards,<br/>Cinute Digital</p>
                </div>
            `,
            };

            // Only attempt send if credentials look somewhat present or strictly just log in dev
            if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
                await transporter.sendMail(mailOptions);
            } else {
                console.log("Email credentials missing, skipping email send. Mock email content:", mailOptions);
            }

        } catch (emailError) {
            console.error("Failed to send email:", emailError);
            // Continue to return success to user so they see their score on screen
        }

        return NextResponse.json({ success: true, score });

    } catch (error) {
        console.error("Error processing submission:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
