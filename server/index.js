import express from "express"
import cors from "cors"

//SDK de mercado pago
import {MercadoPagoConfig, Preference} from "mercadopago"
//Agregga credenciales
const client = new MercadoPagoConfig({
    accessToken: "APP_USR-4129454910339299-081823-109f33adb4a3eef21960b6d38d2e6a3e-1186436124",
})

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())            

app.get("/", (req, res) => {
    res.send("Soy el server :)")
})

app.post("/create_preference", async (req, res) => {  // Correcta apertura de llaves
    try {
      const body = {
        items: [
          {
            title: req.body.title,
            quantity: Number(req.body.quantity),
            unit_price: Number(req.body.price),
            currency_id: "ARS",
          },
        ],
        back_urls: {
          success: "https://www.youtube.com/watch?v=Gykudr8IAfc&t=398s",
          failure: "https://www.youtube.com/watch?v=Gykudr8IAfc&t=398s",
          pending: "https://www.youtube.com/watch?v=Gykudr8IAfc&t=398s",
        },
        auto_return: "approved",
      };
  
      const preference = new Preference(client);
      const result = await preference.create({ body });
      res.json({
        id: result.id,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        error: "Error al crear la preferencia :(",
      });
    }
  });

  app.listen(port, () => {
    console.log(`El servidor esta corriendo en el puerto ${port}`)
  })