import { google } from 'googleapis';

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

export async function appendRowToSheet(data: {
    date: string;
    fullName: string;
    email: string;
    phone: string;
    source: string;
    type: string;
    interest?: string;
    message?: string;
}) {
    try {
        const sheetId = process.env.GOOGLE_SHEET_ID;
        const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
        const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');

        if (!sheetId || !clientEmail || !privateKey) {
            console.warn('Google Sheets credentials missing. Skipping sheet update.');
            return;
        }

        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: clientEmail,
                private_key: privateKey,
            },
            scopes: SCOPES,
        });

        const sheets = google.sheets({ version: 'v4', auth });

        const values = [
            [
                data.date,
                data.fullName,
                data.email,
                data.phone,
                data.source,
                data.type,
                data.interest || '',
                data.message || '',
            ],
        ];

        await sheets.spreadsheets.values.append({
            spreadsheetId: sheetId,
            range: 'Sheet1!A:H', // Appends to the first available row in columns A-H
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values,
            },
        });

        console.log('Google Sheet updated successfully.');
    } catch (error) {
        console.error('Error updating Google Sheet:', error);
        // Don't throw, so we don't block the main response
    }
}
