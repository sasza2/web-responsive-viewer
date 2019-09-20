## instaling
npm install

## dev
./node_modules/electron/dist/electron .

## faq 
on error `The SUID sandbox helper binary was found, but is not configured correctly` run `sudo sysctl kernel.unprivileged_userns_clone=1`