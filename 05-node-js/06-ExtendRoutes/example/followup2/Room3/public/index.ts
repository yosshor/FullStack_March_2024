function main(){
    try {
        const getDanBtn = document.getElementById('getDanBtn');
        if(!getDanBtn) throw new Error('No button found');
        
        getDanBtn.addEventListener('click', async () => {
            
            const response = await fetch(`/api/users/`);
            if(!response.ok) throw new Error('No response');
            
            const data = await response.json();
            console.log(data);
        });
    } catch (error) {
        console.error(error);
        
    }
}

