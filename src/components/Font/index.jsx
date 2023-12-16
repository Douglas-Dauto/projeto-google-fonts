import './styles.css';

export default function Font() {
    return (
        <div className='container-fluid container-font'>
            <div className='row'>
                <div className='col-12 info-font'>
                    <h2 className='title-font'>Roboto</h2>
                    <p className='styles-font'>12 styles</p>
                    <p className='developer-font'>Christian Robertson</p>
                </div>

                <div className='col-12 container-text-font'>
                    <div className='container-bg-text-font'></div>
                    <p className='text-font'>Everyone has the right to freedom of thought, conscience and religion; this right includes freedom to change his religion or belief, and freedom, either alone or in community with others and in public or private, to manifest his religion or belief in teaching, practice, worship and observance. Everyone has the right to freedom of opinion and expression; this right includes freedom to hold opinions without interference and to seek, receive and impart information and ideas through any media and regardless of frontiers. Everyone has the right to rest and leisure, including reasonable limitation of working hours and periodic holidays with pay.</p>
                </div>
            </div>
        </div>
    );
}