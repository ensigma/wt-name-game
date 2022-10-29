const getJSON = async () => {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Access-Control-Request-Headers': '*',
            'Content-type': 'application/json; charset=UTF-8',
        },

    }
    return await fetch('https://namegame.willowtreeapps.com/api/v1.0/profiles', requestOptions)
        .then(response => response.json())
        .then(response => {
            const arrayProfiles = [];
            response.forEach((profile, index) => {
                if (index < 6) {
                    const singleProfile = {
                        "name" : `${profile.firstName} ${profile.lastName}`,
                        "headshot" : {
                            "alt" : profile.headshot.alt,
                            "height" : profile.headshot.height,
                            "width" : profile.headshot.width,
                            "url" : profile.headshot.url
                        },
                        "id": profile.id,

                    };
                    arrayProfiles.push(singleProfile);
                }
            });

            return arrayProfiles;
        })
};

export default getJSON;