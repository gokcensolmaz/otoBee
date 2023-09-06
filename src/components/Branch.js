import React, { useState } from 'react';
import Turkey from '../assets/images/turkey_map.svg';
import Ankara from '../assets/images/ankara.svg';
import Istanbul from '../assets/images/istanbul.svg';
import Izmir from '../assets/images/izmir.svg';
import Canakkale from '../assets/images/canakkale.svg';
import Mugla from '../assets/images/mugla.svg';
import Kayseri from '../assets/images/kayseri.svg';
import Trabzon from '../assets/images/trabzon.svg';
import Hatay from '../assets/images/hatay.svg';

import '../styles/branch.css';
import { tab } from '@testing-library/user-event/dist/tab';
const Branch = () => {
    const [selectedCity, setSelectedCity] = useState({ name: 'Ankara', phone: '(0312) 220 55 02', address: 'Söğütözü Cd. Koç Towers No:2, Söğütözü, 06510 Çankaya/Ankara',color: '#E6983F' });

    const handleCityClick = (cityName, cityPhone, cityAddress,cityColor) => {
        setSelectedCity({ name: cityName, phone: cityPhone, address: cityAddress ,color: cityColor});
    }
    return (
        <main>
            <h1>Branches</h1>
            <div className='page-container'>

                <div className='map-container'>
                    <div className='map'>
                        <img src={Turkey} className="map-image" alt="Turkey Map"></img>
                        <img src={Ankara} className="city ankara" alt="Ankara" onClick={() => handleCityClick('Ankara', '(0312) 220 55 02', 'Söğütözü Cd. Koç Towers No:2, Söğütözü, 06510 Çankaya/Ankara','#E6983F')}></img>
                        <img src={Istanbul} className="city istanbul" alt="Istanbul" onClick={() => handleCityClick('İstanbul', '(0212) 229 27 00', 'Bostancı Mah. Bağdat Cad. Türel Apt. No: 444/A Suadiye/İstanbul','#7AB0DE')}></img>
                        <img src={Izmir} className="city izmir" alt="Izmir" onClick={() => handleCityClick('İzmir', ' (0232) 498 91 00', 'Çınarlı Mah. Ankara Asfaltı Cad. No: 30 Konak/İzmir','#763A83')}></img>
                        <img src={Canakkale} className="city canakkale" alt="Canakkale" onClick={() => handleCityClick('Çanakkale', '0(286) 213 17 30', 'Fevzipaşa, Fevzipaşa Mahallesi Yalı Caddesi, Çimenlik Sk. no 46, 17100 Çanakkale Merkez/Çanakkale','#7AB0DE')}></img>
                        <img src={Kayseri} className="city kayseri" alt="Kayseri" onClick={() => handleCityClick('Kayseri', '0(352) 221 11 50', 'Gevhernesibe, Tekin Sk. No:13, 38010 Kocasinan/Kayseri','#E6983F')}></img>
                        <img src={Hatay} className="city hatay" alt="Hatay" onClick={() => handleCityClick('Hatay', '0(326) 614 13 95', 'Süleymaniye, Atatürk Blv., 31200 İskenderun/Hatay','#D43370')}></img>
                        <img src={Mugla} className="city mugla" alt="Mugla" onClick={() => handleCityClick('Muğla', '0(252) 313 19 39', 'Kumbahçe, Zeki Müren Cd. No:11, 48400 Bodrum/Muğla','#763A83')}></img>
                        <img src={Trabzon} className="city trabzon" alt="Trabzon" onClick={() => handleCityClick('Trabzon', '0(462) 531 10 64', 'Altındere, Altindere Valley National Park, 61750 Maçka/Trabzon','#43976A')}></img>
                    </div>
                </div>
                <div className="card" style={{backgroundColor: selectedCity.color}}>
                    <h2>{selectedCity.name}</h2>
                    <span>
                        <strong>Address:&nbsp;</strong>

                        <a href={`https://www.google.com/maps/search/?api=1&query=${selectedCity.address}`} target="_blank" rel="noopener noreferrer">
                            <span className='brandAddress'>{selectedCity.address}</span>
                        </a>
                        <p></p>
                        <strong>Telephone:&nbsp; </strong> <a href={`tel:${selectedCity.phone}`}><span className='brandPhone'>{selectedCity.phone}</span></a>
    
                    </span>
                </div>

            </div>
        </main>
    );
}
export default Branch;