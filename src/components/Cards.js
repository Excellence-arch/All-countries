import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Cards = ({darkmode, onlineData}) => {
    let {id} = useParams();
    // console.log(onlineData[id])
    const navigate = useNavigate();

    const backs = () => {
        navigate("/")
    }
    console.log(onlineData)
  return (
    <div className={darkmode ? "bg-navy bg-real mt-3" : "bg-light bg-real mt-3"}>
        <div className="container">
            <button onClick={backs} className={darkmode ? "btn bg-navy text-white shadow m-3" : "btn bg-light shadow m-3 text-dark"}> &larr; Back</button>
            <div className={darkmode ? "bg-navy row card-pad" : "bg-light row card-pad"}>
                <div className="col-lg-6 col-sm-12 mt-5">
                    <img src={onlineData[id].flags.png} alt="onlineData.name.common" />
                </div>
                <div className={darkmode ? "bg-navy col-lg-6 col-sm-12 mt-5": "col-lg-6 col-sm-12 bg-light mt-5"}>
                    <p className="h3">{onlineData[id].name.common}</p>
                    <div className="col-6">
                        <p><span className='h6'>Native Name:</span> {onlineData[id].name.official}</p>
                        <p><span className='h6'>Population:</span> {onlineData[id].population}</p>
                        <p><span className='h6'>Region:</span> {onlineData[id].region}</p>
                        <p><span className='h6'>Sub region:</span> {onlineData[id].subregion}</p>
                        <p><span className='h6'>Capital:</span> {onlineData[id].capital}</p>
                    </div>
                    <div className="col-6">
                    <p><span className='h6'>Top Level Domain:</span> {onlineData[id].tld[0]}</p>
                    <p><span className='h6'>Currencies:</span> {Object.values(onlineData[id].currencies).map((val, j) => <span key={j}>{val.name},</span>)}</p>
                    <p><span className='h6'>Languages:</span> {Object.values(onlineData[id].languages).map((val, k) => <span key={k}>{val},</span>)}</p>
                    </div>
                    {/* <p>{}</p> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards;