import Link from "next/link";

export default function page() {
    return (
        <section>
            <div className="mx-auto w-11/12 md:w-1/2">
                <h1 className="text-center">Contact Us</h1>
                <p className="text-center text-muted-foreground">Its easy to contact us, we want to help and we&apos;re always happy to answer your questions. We do custom creations, and always try to meet your needs. So send us a note and let us know what you are interested in.</p>
                <div className="mt-6 py-1 px-3 bg-muted rounded">
                    <span className="font-bold">Email: </span>
                    <Link className="text-blue-600 hover:text-blue-400 hover:underline" href="mailto:chrisralph@hotmail.com">chrisralph218@gmail.com</Link>
                </div>
                <p className="text-center text-muted-foreground">Just one thing about contacting us. We are a small business, at sometimes we are out in the field mining turquoise or just taking a vacation. Usually we are good about responding to our email promptly, but once in a while, there are a few delays. Sometimes it takes a couple days for us to respond, especially over weekends.</p>
                <div className="mt-6 py-1 px-3 bg-muted rounded">
                    <p className="text-muted-foreground"> If you&apos;d like to send us something in the mail, you can send it to us at:</p>
                    <span className="">Chris Ralph,</span> <br />
                    <span className="">Nevada Outback Gems,</span> <br />
                    <span className="">P. O. Box  3104,</span> <br />
                    <span className="">Reno, Nevada  89505 </span>
                </div>
            </div>
        </section>
    );
}
