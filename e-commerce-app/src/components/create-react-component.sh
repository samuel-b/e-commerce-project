mkdir $1

touch ./$1/$1.jsx ./$1/index.js

echo "import styles from './$1.module.scss';

const $1 = () => {
return (
)
}

export default $1;" >> ./$1/$1.jsx

echo "
.$1 {
}" >> ./$1/$1.module.scss

echo "import $1 from './$1';
export default $1;" >> ./$1/index.js



