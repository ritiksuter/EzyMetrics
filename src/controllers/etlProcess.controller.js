import { fetchCRMData } from "../../dummy-data/crmData.js";
import { fetchMarketingData } from "../../dummy-data/marketingData.js";
import { Campaign } from "../model/campaign.model.js";
import { Lead } from "../model/lead.model.js";

export const etlProcess = async (req, res) => {
    try {
        const leads = await fetchCRMData();
        const campaigns = await fetchMarketingData();

        console.log("Sending data to the db");

        const transformedLeads = leads.data.map((lead) => ({
            name: lead.name,
            email: lead.email,
            company: lead.company.name,
        }));

        const transformedCampaigns = campaigns.data.map((campaign) => ({
            title: campaign.title,
            body: campaign.body,
        }));

        await Lead.insertMany(transformedLeads);
        await Campaign.insertMany(transformedCampaigns);

        return res.status(200).json({ success: true, message: "ETL process become successful" });
    }
    catch (error) {
        console.log("Error while doing etl process");
        return res.status(500).json({ success: false, message: "Error in ETL process." });
    }
}