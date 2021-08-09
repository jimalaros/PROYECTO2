import mongoose from "mongoose";

(async () => {
    const db = await mongoose.connect('mongodb://localhost:27017/segundoproyecto', 
    { useNewUrlParser: true, useUnifiedTopology: true });

    console.log("Conectado a la base de datos", db.connection);
}
)();