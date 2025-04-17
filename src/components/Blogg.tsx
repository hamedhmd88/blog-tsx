// Blogg.tsx
type Props = {
    children: React.ReactNode
    setCount: React.Dispatch<React.SetStateAction<number>>
  }
  
  function Blogg({ children, setCount }: Props) {
    const handleClick = () => {
      setCount((count) => count + 1)
    }
  
    return (
      <div>
        {children}
        <hr />
        <button onClick={handleClick}>Click</button>
      </div>
    )
  }
  
  export default Blogg
  