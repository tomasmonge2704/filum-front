export default function handler(req, res) {
    console.log('entre')
    res.status(200).json({ name: 'tomas Doe' })
  }