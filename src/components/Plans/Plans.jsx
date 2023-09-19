import './plans.css'
import {dataPlans} from '../../data/dataPlans'
export const Plans = () => {
  return (
    <div className='plans-container' id='plans'>
        <div className="blur blur-p"></div>
        <div className="programs-header" style={{gar: '2rem', color:'var(--textblue)'}}>
            <span className='stroke-text'>Selecciona</span>
            <span>tú mejor</span>
            <span className='stroke-text'>Plan</span>
        </div>
        {/**Cards */}
        <div className="Plans">
            {dataPlans.map((plan, index)=>(
                <div key={index} className="plan">
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span>{plan.price}</span>

                    <div className="features">
                        {plan.features.map((feature,index)=>(
                            <div key={index} className="feature">
                                <span>✅</span>
                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>
                    <div>
                    <span>Ver más beneficios → </span>
                    </div>
                    <button className='btn'>Inscríbete</button>
                </div>
            ))}
        </div>
    </div>
  )
}
