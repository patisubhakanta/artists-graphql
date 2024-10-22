export const formatPrice = (amount: number, currency: string): string => {
    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    return formatter.format(amount);
};

export const descriptionFormatter = (description: string) => {
    if (description) {
        const parsedData = JSON.parse(description);
        const blockData = parsedData.blocks.length ? parsedData.blocks[0].data.text : "";
        const filterData = blockData.replace(/<\/?[^>]+(>|$)|&nbsp;/g, "");
        return filterData
    } else {
        return ""
    }
}