import TabSelector from './TabSelector'
import CurveDeposit from './CurveDeposit'
import CurveWithdraw from './CurveWithdraw'

const tabs = [
  {
    name: 'curvedeposit',
    component: CurveDeposit
  },
  {
    name: 'curvewithdraw',
    component: CurveWithdraw
  }
]

const Liquidity = function () {
  return (
    <TabSelector
      className="w-full px-2 py-8 bg-white shadow-md md:px-8 xl:px-40 xl:w-160 rounded-md"
      tabs={tabs}
    />
  )
}

export default Liquidity