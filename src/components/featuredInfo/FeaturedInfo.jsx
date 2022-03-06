import './featuredinfo.css'
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'

function FeaturedInfo() {
    return (
        <div className='featured'>
            <div className="featuredItem">
                <span className="span featuredTitle">Receita</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,50
                    </span>
                    <span className="featuredMoneyRate">-11.4
                        <ArrowDownward className='featuredIcon negative' />
                    </span>
                </div>
                <span className="featuredSub">Comparado ao mês passado</span>
            </div>
            <div className="featuredItem">
                <span className="span featuredTitle">Vendas</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$5890
                    </span>
                    <span className="featuredMoneyRate">+11.4
                        <ArrowUpward className='featuredIcon' />
                    </span>
                </div>
                <span className="featuredSub">Comparado ao mês passado</span>
            </div>
            <div className="featuredItem">
                <span className="span featuredTitle">Despesas</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$5.000
                    </span>
                    <span className="featuredMoneyRate">-11.4
                        <ArrowDownward className='featuredIcon negative' />
                    </span>
                </div>
                <span className="featuredSub">Comparado ao mês passado</span>
            </div>
        </div>
    )
}

export default FeaturedInfo