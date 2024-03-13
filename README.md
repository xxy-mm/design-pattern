# notes

## what are pnpx, pnpm dlx, and pnpm create

As of v7, pnpm dlx is the same as pnpx. It downloads a package and executes it.

pnpx is deprecated now. use pnpm dlx instead.

pnpm create is a shorthand for pnpm dlx, when you need to create an app. So, for instance, pnpm create react-app my-app will download the create-react-app package and run it to bootstrap a react app. It is the same as running pnpm dlx create-react-app my-app.

There is also pnpm exec, which doesn't download a package just runs a package that is already in node_modules/.bin
