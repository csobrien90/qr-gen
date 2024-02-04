import QRCode from 'qrcode'

const generateQR = async (text: string) => {
	const options: QRCode.QRCodeToDataURLOptions = {
		errorCorrectionLevel: 'H',
		type: 'image/png',
		margin: 1,
		width: 600,
		color: {
			dark: '#000000',
			light: '#ffffff'
		}
	}

	try {
		const dataVal = await QRCode.toDataURL(text, options)
	return dataVal
	} catch (err) {
		console.error(err)
	}
}

export default async function Home() {
	let qrCode: string
	try {
		qrCode = await generateQR('https://kittywithacupcake.com/pages/build-your-pronoun-pals-pin-set') as string
	} catch (err) {
		console.error(err)
		qrCode = ''
	}

	return (
		<main>
			<h1>QR Code Generator</h1>
			<img src={qrCode} alt="QR Code" />
			<a href={qrCode} download="qr-code.png">Download</a>
		</main>
	);
}
