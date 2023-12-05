import logo from '../../assets/img/logo.svg';
import search from '../../assets/img/search.svg';
import bag from '../../assets/img/bag.svg';

export default function Header() {
    return (
        <header className='container-fluid'>
            <div className='row'>
                <img src={logo} alt="Logo" className='col-2' />

                <div className='col-10 align-items-center'>
                    <img src={search} alt="Pesquisa" />
                    <input type="text" />
                    <img src={bag} alt="Bolsa" />
                </div>
            </div>
        </header>
    ); 
}