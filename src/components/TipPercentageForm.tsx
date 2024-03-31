import type {Dispatch,SetStateAction} from "react"

type TipPercentageForm= {
    id: string
    value: number
    label: string
}

const tipOptions : TipPercentageForm[] = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
  ]

type TipPercentageFormProps = {
    setTip: Dispatch<SetStateAction<number>>
    tip: number
}

const TipPercentageForm = ( {setTip,tip} : TipPercentageFormProps) => {
    return (
        <div>
            <h3 className="font-black text-2xl">Propina</h3>
            <form> 
                {tipOptions.map ( tipOption => (
                    <div 
                        key={tipOption.id}
                        className=" flex gap-2"
                    >
                        <label htmlFor={tipOption.id}>{tipOption.label}</label>
                        <input 
                            type="radio"
                            id={tipOption.id}
                            name="tip"
                            value={tipOption.value}
                            checked={tipOption.value === tip}
                            onChange={ e => setTip(+ e.target.value)}
                        />
                    </div>
                ))}
            </form>
        </div>
    )
}
  
  export default TipPercentageForm