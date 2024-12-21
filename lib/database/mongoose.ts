import mongoose,{Mongoose} from "mongoose";

const DB=process.env.MONGODB_URL;

interface MongooseConnection{
    conn:Mongoose|null,
    promise:Promise<Mongoose> | null
}

let cached :MongooseConnection = (global as any).mongoose;

if(!cached){
    cached=(global as any).mongoose={conn:null,promise:null}
}

async function Dbconnect(){
    if (cached.conn) {
        return cached.conn;
      }
    if(!DB){
        throw new Error("Please Provide Connection Url.");
    }
    cached.promise= cached.promise || mongoose.connect(DB,{ 
        dbName: 'snapfix'
      });
    cached.conn=await cached.promise;
    return cached.conn;
}
export default Dbconnect;