import { formatEther } from "@ethersproject/units";
import { BigNumber } from "@ethersproject/bignumber";

const SI_SYMBOL = ["", "k", "M", "G", "T", "P", "E"];

export const formatValue = (n : any) => {
    if(n.type === "BigNumber"){
        n = parseFloat(formatEther(BigNumber.from(n).toString()))
    }

    const tier = Math.log10(Math.abs(n)) / 3 | 0;

    if (tier == 0) return n.toPrecision(3);

    const suffix = SI_SYMBOL[tier];
    const scale = Math.pow(10, tier * 3);
    const scaled = n / scale;
    let [left, right] = scaled.toFixed(1).split(".");

    let response = left;
    if (right !== "0") {
        response += "." + right;
    }
    return response + suffix;
}