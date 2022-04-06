import {useEffect, useState} from 'react';
import axios from 'axios';
import Cards from './Cards';

const Home = ({darkmode, searchCountries, found, isLoading, onlineData, errorMsg, changeUrl, showDets}) => {

    const handleDetails = (i) => {
      showDets(i)
    }

    const handleChange = (e)=> {
      searchCountries(e.target.value)
    }

    const handleClick = (e) => {
      let newUrl = `https://restcountries.com/v3.1/region/${e.target.value}`;
      changeUrl(newUrl);
    }
    // console.log(onlineData)
  return (
    <div className={darkmode ? 'bg-navy' : 'bg-light'}>
      {isLoading ? <h1 className={darkmode ? "text-white bg-real text-center" : "text-center text-dark bg-real"}>Loading...</h1> :
        <section className='container'>
          <div className="row">
            <div className="col-lg-3 col-sm-12">
              <input type="text" className={darkmode ? "shadow my-2 nav-navy text-white form-control" : "shadow my-2 form-control bg-light text-dark"} placeholder='Search' onChange={(e)=> handleChange(e)} />
            </div>
            <div className="col-lg-5 col-sm-2"></div>
              <div className='col-lg-3 col-sm-12'>
                <select className={darkmode ? 'nav-navy my-2 text-white form-control' : 'bg-light my-2 floats text-dark form-control'} onChange={e => handleClick(e)}>
                  <option value="Africa">Africa</option>
                  <option value="Asia">Asia</option>
                  <option value="America">America</option>
                  <option value="Europe">Europe</option>
                  <option value="Oceania">Oceania</option>
                </select>
              </div>
          </div>
            
            {found.length > 0 ? 
          <div className={darkmode ? "bg-navy text-center row p-3" : "text-center bg-light row p-3"}>
          {errorMsg ? <h1>{errorMsg}</h1> 
          :
          found.map((val, i) => (
            <div onClick={() => handleDetails(i)} style={{height: "340px", width: "230px"}} className={darkmode? "card col-lg-3 col-md-6 m-3 col-sm-12 nav-navy shadow-lg card-pad" : "card col-lg-3 m-3 col-sm-12 nav-light shadow-lg card-pad"} key={i}>
                <img className="card-img-top" style={{height: '180px'}} src={val.flags.png} alt={val.name.common}/>
                <div className={darkmode ? " bg-navy card-body" : 'bg-light card-body'}>
                    <h4 className="card-title">{val.name.common}</h4>
                    <p className="card-text">Population: {val.population}</p>
                    <p className="card-text">Region: {val.region}</p>
                    <p className="card-text">Capital: {val.capital}</p>
                </div>
            </div>
          ))
          }
        </div>
        :
        <div className={darkmode ? "bg-navy text-center row p-3" : "text-center bg-light row p-3"}>
              {errorMsg ? <h1>{errorMsg}</h1> 
              :
              onlineData.map((val, i) => (
                <div onClick={() => handleDetails(i)} style={{height: "340px", width: "230px"}} className={darkmode? "card col-lg-3 col-md-6 m-3 col-sm-12 nav-navy shadow-lg card-pad" : "card col-lg-3 m-3 col-sm-12 nav-light shadow-lg card-pad"} key={i}>
                    <img className="card-img-top" style={{height: '180px'}} src={val.flags.png} alt={val.name.common}/>
                    <div className={darkmode ? " bg-navy card-body" : 'bg-light card-body'}>
                        <h4 className="card-title">{val.name.common}</h4>
                        <p className="card-text">Population: {val.population}</p>
                        <p className="card-text">Region: {val.region}</p>
                        <p className="card-text">Capital: {val.capital}</p>
                    </div>
                </div>
              ))
              }
            </div>  
          }
            
        </section>
      }
        
    </div>
  )
}

export default Home;