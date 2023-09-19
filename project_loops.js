/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (nft) {
    let objMint = {};
    
    
    objMint.name = "MyNFT";
    objMint.data = 10;
    objMint.price = 500;
    
    
    nft.push(objMint);
    objMint = {};

    objMint.name = "NFT2.0";
    objMint.data = 20;
    objMint.price = 1200;
    
    nft.push(objMint);
    objMint = {};

    objMint.name = "CatCoinage";
    objMint.data = 30;
    objMint.price = 3500;
    
    nft.push(objMint);

    return nft;
}


// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs (nft) {
    
    for (let index = 0; index < nft.length ; index++) {
        const lnfts = nft[index];
        console.log("Name: " + lnfts.name);
        console.log("Data no.: " + lnfts.data);
        console.log("Price: "+ lnfts.price + '\n');
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("There are " + nft.length + " NFT(s) in this code");
}

// call your functions below this line
const nft = [];
mintNFT(nft);
listNFTs(nft);
getTotalSupply();