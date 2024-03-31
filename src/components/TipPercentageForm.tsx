type TipPercentageFormProps = {
    id: string
    value: number
    label: string
}

const tipOptions : TipPercentageFormProps[] = [
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

const TipPercentageForm = () => {
    return (
        <div>
            <h3 className="font-black text-2xl">Propina</h3>
            <form> 
                {tipOptions.map ( tip => (
                    <div 
                        key={tip.id}
                        className=" flex gap-2"
                    >
                        <label htmlFor={tip.id}>{tip.label}</label>
                        <input 
                            type="radio"
                            id={tip.id}
                            name="tip"
                            value={tip.value}
                        />
                    </div>
                ))}
            </form>
        </div>
    )
}
  
  export default TipPercentageForm