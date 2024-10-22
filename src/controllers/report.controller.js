import PDFDocument from 'pdfkit';
import { Parser } from 'json2csv';
import { Lead } from '../model/lead.model.js';

export const genratePDFReport = async (req, res) => {
    try {
        const leads = await Lead.find({});
        const doc = new PDFDocument();

        doc.pipe(res);

        leads.forEach((lead) => {
            doc.fontSize(20).text(`Name: ${lead.name} \nEmail: ${lead.email} \nCompany: ${lead.company} \n\n`);
        });

        doc.end();
    }
    catch (error) {
        console.log("Something went wrong while generating PDF report");
        return res.json({ success: false, message: "Error while generating the PDF", status: 500 });
    }
};


export const generateCSVReport = async (req, res) => {
    try {
        const leads = await Lead.find({});
        const fields = ['name', 'email', 'company'];
        const parser = new Parser({ fields });
        const csv = parser.parse(leads);
        res.attachment("Leads_Report.csv");
        res.status(200).send(csv);
    }
    catch (error) {
        console.log("Something went wrong while generating CSV report");
        return res.status(500).json({ success: false, message: "Error while generating the CSV file" });
    }
}