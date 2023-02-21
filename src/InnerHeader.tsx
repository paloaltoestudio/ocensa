import ocensa_logo from './assets/ocensa-logo.svg'

export default function InnerHeader(){
    return(
        <nav className="inner_header">
          <div className="logo">
            <img src={ocensa_logo} width={150} alt="" />
          </div>
        </nav>
    )
}