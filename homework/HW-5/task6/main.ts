let foobar = (text: string): void => {
    document.write(
        `
            <ul>
              <li>${text}</li>
              <li>${text}</li>
              <li>${text}</li>
            </ul>
        `
    );
}
foobar('Hello, World!');