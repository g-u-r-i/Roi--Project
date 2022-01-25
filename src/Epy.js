function EPY(){
        const  EpyClick=(e)=>{
            e.preventDefault();
            e.target.style.backgroundColor = 'yellow'
                 }
    return(
        <div >
        <h4 className='apy'> Enable Accelerated APY <i class="fa fa-toggle-off"></i></h4>
        
        <button onClick={ EpyClick}>Tier 1</button>
        <button onClick={ EpyClick}>Tier 2</button>
        <button onClick={ EpyClick} >Tier 3</button>
        <button onClick={ EpyClick} >Tier 4</button>
        <button onClick={ EpyClick} >Tier 5</button>
       <div id='ri' >ROI at Current Rates</div>

       <input type="text" id="pr" placeholder='USD' class="static-value"/>
    </div>

    )
}
export default EPY;