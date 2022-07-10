import { Card } from "./Card"

export const BestHands = () => {



    return (

        <div className="flex flex-col space-y-8"> 
            <div>
                Poker Hands Ranking
            </div>

            <div className="divide-y divide-slate-900 ... space-y-6 pb-8">
                <div>Royal Flush
                    <div className="flex flex-row space-x-2">
                        <Card value="10" symbol="H" size={2} />
                        <Card value="11" symbol="H" size={2} />
                        <Card value="12" symbol="H" size={2} />
                        <Card value="13" symbol="H" size={2} />
                        <Card value="14" symbol="H" size={2} />
                    </div>
                </div>
                <div>Straight Flush
                    <div className="flex flex-row space-x-2">
                        <Card value="4" symbol="C" size={2} />
                        <Card value="5" symbol="C" size={2} />
                        <Card value="6" symbol="C" size={2} />
                        <Card value="7" symbol="C" size={2} />
                        <Card value="8" symbol="C" size={2} />
                    </div>
                </div>
                <div>Four of a Kind
                    <div className="flex flex-row space-x-2">
                        <Card value="14" symbol="C" size={2} />
                        <Card value="14" symbol="H" size={2} />
                        <Card value="14" symbol="S" size={2} />
                        <Card value="14" symbol="D" size={2} />
                    </div>
                </div>
                <div>Full House
                    <div className="flex flex-row space-x-2">
                        <Card value="12" symbol="C" size={2} />
                        <Card value="12" symbol="H" size={2} />
                        <Card value="12" symbol="S" size={2} />
                        <Card value="7" symbol="C" size={2} />
                        <Card value="7" symbol="D" size={2} />
                    </div>
                </div>
                <div>Flush
                    <div className="flex flex-row space-x-2">
                        <Card value="2" symbol="D" size={2} />
                        <Card value="4" symbol="D" size={2} />
                        <Card value="9" symbol="D" size={2} />
                        <Card value="7" symbol="D" size={2} />
                        <Card value="6" symbol="D" size={2} />
                    </div>
                </div>
                <div>Straight
                    <div className="flex flex-row space-x-2">
                        <Card value="4" symbol="C" size={2} />
                        <Card value="5" symbol="D" size={2} />
                        <Card value="6" symbol="S" size={2} />
                        <Card value="7" symbol="D" size={2} />
                        <Card value="8" symbol="C" size={2} />
                    </div>
                </div>
                <div>Three of a Kind
                    <div className="flex flex-row space-x-2">
                        <Card value="13" symbol="C" size={2} />
                        <Card value="13" symbol="S" size={2} />
                        <Card value="13" symbol="D" size={2} />
                        <Card value="6" symbol="C" size={2} />
                        <Card value="2" symbol="H" size={2} />
                    </div>
                </div>
                <div>Two Pair
                    <div className="flex flex-row space-x-2">
                        <Card value="3" symbol="C" size={2} />
                        <Card value="3" symbol="H" size={2} />
                        <Card value="9" symbol="S" size={2} />
                        <Card value="9" symbol="D" size={2} />
                        <Card value="5" symbol="C" size={2} />
                    </div>
                </div>
                <div>Pair
                    <div className="flex flex-row space-x-2">
                        <Card value="3" symbol="H" size={2} />
                        <Card value="3" symbol="C" size={2} />
                        <Card value="6" symbol="S" size={2} />
                        <Card value="2" symbol="H" size={2} />
                        <Card value="9" symbol="D" size={2} />
                    </div>
                </div>
                <div>High Card
                    <div className="flex flex-row space-x-2">
                        <Card value="4" symbol="D" size={2} />
                        <Card value="2" symbol="C" size={2} />
                        <Card value="13" symbol="H" size={2} />
                        <Card value="7" symbol="S" size={2} />
                        <Card value="9" symbol="C" size={2} />
                    </div>
                </div>
            </div>
        </div>
    )


}
