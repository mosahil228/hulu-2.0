// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const API_KEY=process.env.API_KEY;
export default function handler(req, res) {
  const url= `https://api.themoviedb.org/3//trending/all/week?api_key=${API_KEY}`;
  
  
  res.status(200).json({url:url});
}
