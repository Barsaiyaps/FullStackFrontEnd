function Home(){

    localStorage.setItem("user", JSON.stringify("Pankaj"));
    let localStorageData=JSON.parse(localStorage.getItem("user"))
    
    console.log(localStorageData)

    return(
        <h1>Please Go to Products</h1>
    )
}

export default Home