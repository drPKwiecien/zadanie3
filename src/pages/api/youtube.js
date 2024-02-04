import axios from 'axios';

export default async function handler(req, res) {
    const { q: searchQuery } = req.query;
    const apiKey = process.env.YOUTUBE_API_KEY;
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(searchQuery)}&key=${apiKey}`;

    try {
        const response = await axios.get(url);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching data from YouTube' });
    }
}
