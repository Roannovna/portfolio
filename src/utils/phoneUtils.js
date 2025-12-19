const COUNTRY_PHONE_CODES = {
	Russia: "+7",
	"United States": "+1",
};

export const formatPhoneWithCode = (phoneNumber, country) => {
	const code = COUNTRY_PHONE_CODES[country];
	if (code && phoneNumber) {
		return `${code} ${phoneNumber}`;
	}
	return phoneNumber;
};
