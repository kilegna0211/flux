import axios from 'axios';

const wsSalesCampaign = async (campaignId, size) => {
    const url = 'https://fr.shopping.rakuten.com/restpublic/vis-web/salesCampaign?campaign=' + campaignId + '&from=0&size=' + size;
    try {
        const res = await axios.get(url);
        return res.data;
    }
    catch (error) {
        console.log(error);
    }
}

export { wsSalesCampaign }

