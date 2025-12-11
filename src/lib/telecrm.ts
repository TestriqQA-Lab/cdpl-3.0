import axios from 'axios';

interface TeleCRMField {
    name?: string;
    email?: string;
    phone: string;
    source?: string;
    [key: string]: any;
}

interface TeleCRMPayload {
    fields: TeleCRMField;
    actions: any[];
}

export async function pushLeadToTeleCRM(leadData: {
    fullName: string;
    email: string;
    phone: string;
    source: string;
}) {
    const enterpriseId = process.env.TELECRM_ENTERPRISE_ID;
    const apiToken = process.env.TELECRM_API_TOKEN;

    if (!enterpriseId || !apiToken) {
        console.warn('TeleCRM credentials missing. Skipping lead push.');
        return;
    }

    const url = `${process.env.TELECRM_API_URL}/enterprise/${enterpriseId}/autoupdatelead`;

    const payload: TeleCRMPayload = {
        fields: {
            name: leadData.fullName,
            email: leadData.email,
            phone: leadData.phone,
            source: leadData.source,
        },
        actions: [],
    };

    try {
        console.log('Pushing to TeleCRM:', url);
        console.log('Token:', apiToken?.substring(0, 10) + '...');
        console.log('Payload:', JSON.stringify(payload, null, 2));

        const response = await axios.post(url, payload, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${apiToken}`,
            },
        });

        console.log('TeleCRM push successful:', response.data);
        return response.data;
    } catch (error: any) {
        console.error('TeleCRM push failed:', error.response?.data || error.message);
        // We do not throw the error to ensure the user still gets a success response for the form submission
        return null;
    }
}
