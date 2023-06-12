```⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣼⠟⠻⣷⡄⠀⠀⠀⠀⠀⠀⠀⠀⣴⣿⠛⢿⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⡇⠃⠆⠘⣿⠀⠀⠀⠀⠀⠀⠀⢠⣿⠁⡀⠀⢻⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣧⣀⣀⣼⣿⣇⠀⠀⠀⠀⠀⠀⢸⣿⣄⣀⣀⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⡇⡀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⡯⠅⠀⠀⠀⠀⠀⢹⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣿⡼⣿⣿⢳⡟⠁⠀⠀⠀⠀⠀⠀⢸⣷⡹⣿⡿⣹⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⣠⠖⠋⠉⠉⠉⠙⠲⣦⡀⠀⢻⣷⣄⣠⣾⡇⠀⠀⠀⠀⠀⠀⠀⠀⢿⣷⣄⣰⣿⠇⠀⠀⢀⣠⡴⠶⠶⠶⢤⣄⡀⠀
⠸⣏⡀⠒⢶⠀⠀⢠⠀⢸⣷⠀⠀⠙⠻⠟⠋⠀⢠⡀⠀⠀⠀⠀⣰⡄⠈⠛⠛⠛⠃⠀⠀⢰⣏⠀⢀⣀⣠⣀⡀⠀⢻⡄
⠀⠉⠛⠦⠤⠤⠤⠼⠛⠋⠀⠀⠀⠀⠀⠀⠀⠀⠘⠻⠷⠶⠶⠾⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠙⠦⣄⣁⣉⣉⣩⣶⠟⠁
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠀⠀⠀⠀```⠀
# Kirvy

Kirvy is a script made entirely in NodeJs to encrypt any type of file, no matter the extension, and you can also decrypt files that have been encrypted with Kirvy.

## Installation

You can install Kirvy following this commands:

```shell
git clone https://github.com/ottersek/kirvy
cd kirvy
npm i
```

## Usage

To encrypt/decrypt a script file, use the following command:

```shell
Encrypt: node kirvy.js --encrypt <file_to_encrypt> --output <output_file_name (include extension if have like .js, .txt, .md, .html etc)>
Decrypt: node kirvy.js --decrypt <file_to_decrypt (only files encrypted with kirvy)> --output <output_file_name>
```

## Demo

Executing
```shell
node kirvy.js --encrypt "kirvy example.txt" --output "kirvy example crypted.txt"
```
![image](https://github.com/ottersek/kirvy/assets/121310374/bf998ae4-fe84-4420-9611-d882b6cbcea7)
![image](https://github.com/ottersek/kirvy/assets/121310374/614f0d07-8794-4c59-b9aa-254e5afb8590)
![image](https://github.com/ottersek/kirvy/assets/121310374/e856f104-0820-4251-b44c-9a16ba7e1a92)
![image](https://github.com/ottersek/kirvy/assets/121310374/bfd69e49-0bc9-4497-964a-0a1938c7fd6c)

Executing
```shell
node kirvy.js --decrypt "kirvy example crypted.txt.kirvy" --output "decrypted"
```

![image](https://github.com/ottersek/kirvy/assets/121310374/2ca51f41-ad1f-4af6-8745-3e6928a5c673)
![image](https://github.com/ottersek/kirvy/assets/121310374/89a55161-a5ca-4760-add1-0f307b1c861a)
![image](https://github.com/ottersek/kirvy/assets/121310374/141ca943-721e-4ea9-94e8-b4ec97ce433d)


## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please create an issue or submit a pull request on the [GitHub repository](https://github.com/ottersek/kirvy).

You are free to use the code as it is open source and licensed under the [MIT License](LICENSE). However, if you find the code helpful and decide to use any part of it, it would be greatly appreciated if you give proper attribution. Feel free to fork the project and modify it according to your needs.

If you find Kirvy useful, consider giving it a star on GitHub!

## License

This project is licensed under the [MIT License](LICENSE).
