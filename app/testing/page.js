import BlockRevealImage from "../../components/blockrevealimage"; 

export default function TestingPage() {
    return (
      <div className="flex flex-col items-center justify-center h-screen pt-20">
            <div style={{ padding: "40px" }}>
                <BlockRevealImage src="/profile_pic.jpg" rows={6} cols={6} />
            </div>
      </div>
    )
}