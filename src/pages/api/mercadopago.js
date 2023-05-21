const API_URL = process.env.NEXT_PUBLIC_API_KEY;

export default function handler(req, res) {
    console.log(req)
    console.log('api url' + API_URL)
    const postCompra = async () => {
        try {
          const body = await compra;
          await fetch(`${API_URL}/api/compras`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authentication: `${localStorage.getItem("token")}`,
            },
            body,
          });
        } catch (error) {
          alert(error);
        }
      };
    res.status(200).json({ name: 'tomas Doe' })
  }