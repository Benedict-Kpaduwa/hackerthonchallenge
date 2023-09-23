import axios from "axios";

export const contactus = async (data) => {
    const config = {
        headers: {
            accept: "application/json",
        },
    };
    const response = await axios.post(
        "https://backend.getlinked.ai/hackathon/contact-form",
        data,
        config
    );
    return response;
};