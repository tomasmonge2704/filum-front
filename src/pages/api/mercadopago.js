export default function handler(req, res) {
    console.log(req)
    res.status(200).json({ name: 'tomas Doe' })
  }