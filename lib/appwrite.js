import {
  Client,
  Account,
  ID,
  Avatars,
  Databases,
  Query,
} from "react-native-appwrite";

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


// Register user
export async function createUser(email, password, username) {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );

    if (!newAccount) throw Error;

    const avatarUrl = avatars.getInitials(username);

    await signIn(email, password);

    const newUser = await databases.createDocument(
      appwriteConfig.databaseID,
      appwriteConfig.userCollectionID,
      ID.unique(),
      {
        accountID:newAccount.$id,
        email: email,
        username: username,
        avatar: avatarUrl,
      }
    );
      console.log("new user", newUser);
    return newUser;
  } catch (error) {
    throw new Error(error);
  }
}

// Sign In
export async function signIn(email, password) {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    console.log(session)
    return session;
  } catch (error) {
    throw new Error(error);
  }
}

// Get Account
export async function getAccount() {
  try {
    const currentAccount = await account.get();

    console.log("current account", currentAccount.$id);
    return currentAccount;
  } catch (error) {
    throw new Error(error);
  }
}

// Get Current User
export async function getCurrentUser() {
  try {
    const currentAccount = await getAccount();
    if (!currentAccount){
      console.log("some error ")
    };

    const currentUser = await databases.listDocuments(
      appwriteConfig.databaseID,
      appwriteConfig.userCollectionID,
      [Query.equal("accountID", currentAccount.$id)]
    );

    console.log(currentUser)
    if (!currentUser){
      console.log("some error ")
    };

    return currentUser.documents;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const getAllposts=async()=>{
  try {
    const posts=await databases.listDocuments(appwriteConfig.databaseID, appwriteConfig.videosCollectionID);
    return posts.documents[0];

  }
  catch(e){
    console.log(e);

  }
}