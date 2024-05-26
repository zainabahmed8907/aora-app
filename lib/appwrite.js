import { Client, Account, ID, Avatars, Databases } from "react-native-appwrite";

export const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.zee.aora",
  projectID: "665359f80012f56f2d01",
  databaseID: "66535b7e00346f84f000",
  userCollectionID: "66535bfa00042f9732c3",
  videosCollectionID: "66535bcf00164e51e40f",
  storageID: "66535de6000aa46df194",
};
// Init your React Native SDK
const client = new Client();
const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

client
  .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
  .setProject(appwriteConfig.projectID) // Your project ID
  .setPlatform(appwriteConfig.platform); // Your application ID or bundle ID.

// Register User

export const createUser = async (name, email, password) => {
  try {
    const newAccount = await account.create(ID.unique(), email, name, password);
    if (!newAccount) {
      throw Error;
    }
    const avatarURL = avatars.getInitials(name);
    await Signin(email, password);

    const newUser = await databases.createDocument(
      appwriteConfig.databaseID,
      appwriteConfig.userCollectionID,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        password,
        avatar: avatarURL,
      }
    );
    console.log(name, email, password);
    
    return newUser;
  } catch (e) {
    throw new e();
  }
};

export const Signin = async (email, password) => {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    return session;
  } catch (e) {
    console.log(e);

  }
};
