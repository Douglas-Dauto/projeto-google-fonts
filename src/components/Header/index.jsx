import logo from '../../assets/img/logo.svg';
import search from '../../assets/img/search.svg';
import bag from '../../assets/img/bag.svg';
import './styles.css';

export default function Header() {
    return (
        <header className='container-fluid header'>
            <div className='row align-items-center'>
                <img src={logo} alt="Logo" className='col-2' />

                <div className='col-10'>
                    <div className='row'>
                        <div className='col-11 input-search'>
                            <img src={search} alt="Pesquisa" className='col-1 search' />
                            <input type="text" placeholder='Pesquise fontes' className='container-fluid col-11 input' />
                        </div>

                        <img src={bag} className='col-1 bag' alt="Bolsa" />
                    </div>
                </div>

                <div className='w-100'>
                    <button className='button-filter'>Filtros</button>
                </div>
            </div>
        </header>
    ); 
}