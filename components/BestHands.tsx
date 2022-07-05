import { Card } from "./Card"

export const BestHands = () => {



    return (

        <div> Poker Hands Ranking

            <div className="divide-y divide-slate-900 ...">
                <div>Royal Flush
                    <div className="flex flex-row space-x-1">
                        <Card value="10" symbol="H" size={3} />
                        <Card value="J" symbol="H" size={3} />
                        <Card value="Q" symbol="H" size={3} />
                        <Card value="K" symbol="H" size={3} />
                        <Card value="A" symbol="H" size={3} />
                    </div>
                </div>
                <div>Straight Flush
                    <div className="flex flex-row space-x-1">
                        <Card value="4" symbol="C" size={3} />
                        <Card value="5" symbol="C" size={3} />
                        <Card value="6" symbol="C" size={3} />
                        <Card value="7" symbol="C" size={3} />
                        <Card value="8" symbol="C" size={3} />
                    </div>
                </div>
                <div>Four of a Kind
                    <div className="flex flex-row space-x-1">
                        <Card value="A" symbol="C" size={3} />
                        <Card value="A" symbol="H" size={3} />
                        <Card value="A" symbol="S" size={3} />
                        <Card value="A" symbol="D" size={3} />
                    </div>
                </div>
                <div>Full House
                    <div className="flex flex-row space-x-1">
                        <Card value="Q" symbol="C" size={3} />
                        <Card value="Q" symbol="H" size={3} />
                        <Card value="Q" symbol="S" size={3} />
                        <Card value="7" symbol="C" size={3} />
                        <Card value="7" symbol="D" size={3} />
                    </div>
                </div>
                <div>Flush
                    <div className="flex flex-row space-x-1">
                        <Card value="2" symbol="D" size={3} />
                        <Card value="4" symbol="D" size={3} />
                        <Card value="9" symbol="D" size={3} />
                        <Card value="7" symbol="D" size={3} />
                        <Card value="6" symbol="D" size={3} />
                    </div>
                </div>
                <div>Straight
                    <div className="flex flex-row space-x-1">
                        <Card value="4" symbol="C" size={3} />
                        <Card value="5" symbol="D" size={3} />
                        <Card value="6" symbol="S" size={3} />
                        <Card value="7" symbol="D" size={3} />
                        <Card value="8" symbol="C" size={3} />
                    </div>
                </div>
                <div>Three of a Kind
                    <div className="flex flex-row space-x-1">
                        <Card value="K" symbol="C" size={3} />
                        <Card value="K" symbol="S" size={3} />
                        <Card value="K" symbol="D" size={3} />
                        <Card value="6" symbol="C" size={3} />
                        <Card value="2" symbol="H" size={3} />
                    </div>
                </div>
                <div>Two Pair
                    <div className="flex flex-row space-x-1">
                        <Card value="3" symbol="C" size={3} />
                        <Card value="3" symbol="H" size={3} />
                        <Card value="9" symbol="S" size={3} />
                        <Card value="9" symbol="D" size={3} />
                        <Card value="5" symbol="C" size={3} />
                    </div>
                </div>
                <div>Pair
                    <div className="flex flex-row space-x-1">
                        <Card value="3" symbol="H" size={3} />
                        <Card value="3" symbol="C" size={3} />
                        <Card value="6" symbol="S" size={3} />
                        <Card value="2" symbol="H" size={3} />
                        <Card value="9" symbol="D" size={3} />
                    </div>
                </div>
                <div>High Card
                    <div className="flex flex-row space-x-1">
                        <Card value="4" symbol="D" size={3} />
                        <Card value="2" symbol="C" size={3} />
                        <Card value="K" symbol="H" size={3} />
                        <Card value="7" symbol="S" size={3} />
                        <Card value="9" symbol="C" size={3} />
                    </div>
                </div>
            </div>
        </div>
    )


}
