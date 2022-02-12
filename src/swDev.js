const swDev=()=>{
    let url=`${process.env.PUBLIC_URL}/sw.js`;
    navigator.serviceWorker.register(url)
    .then((response)=>{
        console.log(response);

    }).catch((err)=>{
        console.log(err);

    })
}

export default swDev;
