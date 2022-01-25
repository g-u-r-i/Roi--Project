function Footer() {
    return (
        <div>
        <h4 className='hd'>Hide Details <i class="font fa-long-arrow-alt-up"></i> </h4>
        <div className='api'>APY 9.0%</div>
        <ul>{
            <>
                <li>
                    Calculated based on current rates
                </li>
                <li> All figures are estimates provided for your convience only and by no means represent guarenteed
                    returns</li>
            </>
        }
        </ul>

    </div>
    )
}
export default Footer;