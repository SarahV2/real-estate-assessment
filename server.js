const express=require('express')
const app=express()
const cors=require('cors')

// app.use(cors({ origin: process.env.CLIENT_ORIGIN || `http://localhost:3000` }));

app.use(cors({origin: '*'}));

const port = process.env.PORT || 5000;
app.use('/api/data', require('./routes/data'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});