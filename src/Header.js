import './css/Roi.css'
function Roi(){
return(
    <div className='box-container'>
   <div class="roi">ROI Calculator</div>
            CAKE <i class="fas fa-toggle-off"></i>USD 
            <input type="text" id="pr" placeholder='USD' class="static-value"/>  
            <div id='c'>~CAKE0.000 </div>
        <button >$1000</button>
        <button >$100</button>
          </div>
)
}
export default Roi;