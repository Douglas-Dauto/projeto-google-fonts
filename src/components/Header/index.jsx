import logo from '../../assets/img/logo.svg';
import search from '../../assets/img/search.svg';
import bag from '../../assets/img/bag.svg';
import filter from '../../assets/img/filter.svg';
import './styles.css';

export default function Header() {
    return (
        <header className='container-fluid header'>
            <div className='row align-items-center'>
                <img src={logo} alt="Logo" className='col-2 logo' />

                <div className='col col-xxl-10'>
                    <div className='row'>
                        <div className='col col-xl-11 input-search'>
                            <img src={search} alt="Pesquisa" className='col-1 search' />
                            <input type="text" placeholder='Pesquise fontes' className='container-fluid col-11 input' />
                        </div>

                        <img src={bag} className='col-1 bag' alt="Bolsa" />
                    </div>
                </div>

                <div className='w-100'>
                    <button className='button-filter'><img src={filter} alt="Filtro" />Filtros</button>
                </div>
            </div>
        </header>
    ); 
}