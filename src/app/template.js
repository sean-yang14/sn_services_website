import Navbar from "@/components/layout/navbar"

export default function Template({ children }) {
  return (
    <>
        <Navbar />
      <div>{children}</div>
    </>
    )
    
}